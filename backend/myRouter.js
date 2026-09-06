// backend/myRouter.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'หน้าแรก - เที่ยวกับฟ้า', activePage: 'home' });
});

router.get('/page2', (req, res) => {
    res.render('page2', { title: 'สถานที่ยอดฮิต - เที่ยวกับฟ้า', activePage: 'page2' });
});

router.get('/page3', (req, res) => {
    res.render('page3', { title: 'คาเฟ่ชิคๆ - เที่ยวกับฟ้า', activePage: 'page3' });
});

router.get('/page4', (req, res) => {
    res.render('page4', { title: 'ที่พักวิวหลักล้าน - เที่ยวกับฟ้า', activePage: 'page4' });
});

router.get('/page5', (req, res) => {
    res.render('page5', { title: 'ทริป 3 วัน 2 คืน - เที่ยวกับฟ้า', activePage: 'page5' });
});

router.get('/page6', (req, res) => {
    res.render('page6', { title: 'รีวิวคาเฟ่ - เที่ยวกับฟ้า', activePage: 'page6' });
});

router.get('/page7', (req, res) => {
    res.render('page7', { title: 'ตัวอย่างทริป - เที่ยวกับฟ้า', activePage: 'trips' });
});

router.get('/page8', (req, res) => {
    res.render('page8', { title: 'ภูเขาและธรรมชาติ - เที่ยวกับฟ้า', activePage: 'page8' });
});

router.get('/page9', (req, res) => {
    res.render('page9', { title: 'คาเฟ่ ร้านอาหาร - เที่ยวกับฟ้า', activePage: 'cafes' });
});

router.get('/page10', (req, res) => {
    res.render('page10', { title: 'คาเฟ่ ร้านอาหาร (หน้า 2) - เที่ยวกับฟ้า', activePage: 'cafes' });
});

router.get('/page11', (req, res) => {
    res.render('page11', { title: 'คาเฟ่ ร้านอาหาร (หน้า 3) - เที่ยวกับฟ้า', activePage: 'cafes' });
});

router.get('/page12', (req, res) => {
    res.render('page12', { title: 'คาเฟ่ ร้านอาหาร (หน้า 4) - เที่ยวกับฟ้า', activePage: 'cafes' });
});

router.get('/page13', (req, res) => {
    res.render('page13', { title: 'ที่พัก - เที่ยวกับฟ้า', activePage: 'page13' });
});

router.get('/page14', (req, res) => {
    res.render('page14', { title: 'ที่พัก - เที่ยวกับฟ้า', activePage: 'page14' });
});

router.get('/page15', (req, res) => {
    res.render('page15', { title: 'ที่พัก - เที่ยวกับฟ้า', activePage: 'page15' });
});

router.get('/page16', (req, res) => {
    res.render('page16', { title: 'ที่พัก - เที่ยวกับฟ้า', activePage: 'page16' });
});

// หน้าสมัครสมาชิก (เปลี่ยนมาเรียกใช้ไฟล์ register.ejs)
router.get('/register', (req, res) => {
    res.render('register', { title: 'สมัครสมาชิก - เที่ยวกับฟ้า', activePage: 'register' });
});

// รองรับการกดส่งข้อมูลฟอร์มสมัครสมาชิก (POST)
router.post('/register', (req, res) => {
    const { firstname, lastname, email, password, phone, travelStyle } = req.body;
    console.log(`สมัครสมาชิกสำเร็จ: ${firstname} ${lastname} (${email}) | สไตล์: ${travelStyle}`);
    
    // เมื่อสมัครเสร็จสามารถเปลี่ยนเส้นทางไปหน้าแรกหรือหน้าที่ต้องการได้
    res.redirect('/');
});

router.get('/history', (req, res) => {
    res.render('history', { title: 'ประวัติการเดินทาง - เที่ยวกับฟ้า', activePage: 'history' });
});

module.exports = router;