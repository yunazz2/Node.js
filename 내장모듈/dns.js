const dns = require('dns');

const hostname = 'www.example.com';

// IP 주소 확인
dns.lookup(hostname, (err, address) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('IP Address:', address);
});

// DNS 레코드 확인
dns.resolve(hostname, 'A', (err, records) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('DNS Records:', records);
});

// 호스트 이름 확인
const ip = '8.8.8.8';
dns.reverse(ip, (err, hostnames) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Hostnames:', hostnames);
});