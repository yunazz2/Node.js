const express = require('express')
const Board =  require('../models/board');
const Sequelize = require('sequelize');
const { where } = require('sequelize');
const router = express.Router()

// let boardList = [
//     { title : '제목1', writer : '작성자1', content : '내용1' },
//     { title : '제목2', writer : '작성자2', content : '내용2' },
//     { title : '제목3', writer : '작성자3', content : '내용3' },
// ]

// 👩‍💻 게시글 목록
router.get('/', async (req, res) => {
    console.log('게시글 목록...');
    let boardList = []
    try {
        boardList = await Board.findAll()           // ✅ 전체 데이터 조회
    } catch (error) {
        console.log(error);
    }

    // console.log(boardList);
    res.render('board/list', {boardList} )
})


// 👩‍💻 게시글 등록
router.get('/insert', (req, res) => {
    console.log('게시글 등록 화면...');
    res.render('board/insert')
})



// 👩‍💻 게시글 등록
router.post('/', async (req, res) => {
    // 구조분해할당
    const { title, writer, content } = req.body;

    const newBoard = { title, writer, content };
    await Board.create(newBoard)  

    res.redirect('/board');
});


// 👩‍💻 게시글 수정 페이지
router.get('/update/:id', async (req, res) => {
    console.log(`id : ${req.params.id}`);
    let id = req.params.id

    let board = await Board.findByPk(id)
    res.render('board/update', { board});
});


// 👩‍💻 게시글 수정
router.post('/update', async (req, res) => {
    const { id, title, writer, content } = req.body;

    const newBoard = {title, writer, content, upd_date: Sequelize.literal('now()')};

    // await Board.update( {title : title, writer : writer, content : content}, {where: {board_no: id}})
    await Board.update( newBoard, {where: {board_no: id}})
    res.redirect(`/board/${id}`);
});


// 👩‍💻 게시글 삭제
router.post('/delete', async (req, res) => {
    const id = req.body.id

    await Board.destroy({ where: { board_no: id } })
    res.redirect('/board');
});


// 👩‍💻 게시글 읽기
// 요청 경로에 파라미터 매핑 방법 ➡ '/:파라미터명'
router.get('/:id', async (req, res) => {
    console.log(`id : ${req.params.id}`);
    let id = req.params.id

    let board = await Board.findByPk(id)
    res.render('board/read', {board})
})


module.exports = router;