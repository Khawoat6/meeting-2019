import React from 'react'
import DarkModeToggle from './DarkModeToggle';
import Fade from 'react-reveal/Fade';
import data from '../data/data.json'

const fullname = data.FullName;
const nickname = data.NickName;

function MeetingHead() {
    return (
        <header className="meeting__head">
            <Fade top>
                <div className="meeting__head-title">
                    <h1>แผนผังแสดงการพบกันประจำปี 2562</h1>
                    <h1>ระหว่าง นายภัทรพล ชมชัยภูมิ และ {fullname} ({nickname})</h1>
                </div>
                <p>ในหนึ่งวันมีหลายคนที่ผ่านเข้ามาในชีวิตและก็มีหลายคนมากเช่นกันที่กำลังเดินออกไปจากชีวิตตของเรา
                หลายครั้งที่เราหลงลืมเหตุการณ์เล็ก ๆ น้อย ๆ ในชีวิต <br/>
                การได้กลับมานั่งดูโปสการ์ดใบนี้ ช่วยให้เราได้ยิ้มมุมปากให้ตัวเองมากขึ้น
                เหมือนเป็นการย้อนเวลา เพื่อช่วยให้ตัวเองหลุดจากโลกที่เต็มไปด้วยความวุ่นวาย แล้วมีความสุขกับเรื่องเล็ก ๆ น้อย ๆ ในความทรงจำของช่วงเวลานั้น ขอบคุณที่เข้ามาในชีวิตเราในปี 2562 และขอโทษคนที่หลงลืมไปด้วยเช่นกัน "สุขสันต์วันปีใหม่ 2564 ครับ" :)
                </p>
            </Fade>
            <DarkModeToggle/>
        </header>
    )
}
export default MeetingHead