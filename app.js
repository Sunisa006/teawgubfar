// app.js
const express = require('express');
const path = require('path');
const myRouter = require('./backend/myRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// ตั้งค่า View Engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, รูปภาพ ฯลฯ จาก frontend/public)
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// รองรับการรับค่าจากฟอร์ม (POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ใช้งาน Router หลักทั้งหมดจาก backend/myRouter.js
app.use('/', myRouter);

// จัดการกรณี Error 404 (ไม่พบหน้าเว็บ)
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'ไม่พบหน้าที่ท่านต้องการ - เที่ยวกับฟ้า', activePage: '' });
});

// รันเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running smoothly at http://localhost:${PORT}`);
});