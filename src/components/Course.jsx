import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { TreeSelect } from "primereact/treeselect";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import html2pdf from "html2pdf.js";
import "../App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

function Course({ setData }) {
  const [course, setCourse] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [konu, setKonu] = useState("");
  const [selectedNodeKey, setSelectedNodeKey] = useState([]);
  const [selectedLessonDate, setselectedLessonDate] = useState("");
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [date, setDate] = useState(new Date());
  const [students, setStudents] = useState(setData);
  const [lessonDate, setLessonDate] = useState([
    "09.00-9.40",
    "09.50-10.30",
    "10.40-11.20",
    "11.30-12.10",
  ]);
  const [nodes, setNodes] = useState([
    {
      key: "Edebiyat - Türkçe",
      label: "Türkçe",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "Edebiyat - Türkçe - HİCRAN ÇEVİK",
          label: "HİCRAN ÇEVİK",
          icon: "pi pi-fw pi-calendar-plus",
          data: "HİCRAN ÇEVİK",
        },
      ],
    },
    {
      key: "Matematik",
      label: "Matematik",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Matematik - RAMAZAN KILIÇ",
          label: "RAMAZAN KILIÇ",
          icon: "pi pi-fw pi-calendar-plus",
          data: "RAMAZAN KILIÇ",
        },
        {
          key: "Matematik - ALİ İHSAN ÖZKAN",
          label: "ALİ İHSAN ÖZKAN",
          icon: "pi pi-fw pi-calendar-plus",
          data: "ALİ İHSAN ÖZKAN",
        },
        {
          key: "AHMET ÖZDEMİR",
          label: "Öğretmen 3",
          icon: "pi pi-fw pi-calendar-plus",
          data: "AHMET ÖZDEMİR",
        },
      ],
    },
    {
      key: "3",
      label: "Geometri",
      data: "Geometri",
      icon: "pi pi-fw pi-star-fill",
      children: [
        {
          key: "Geometri - HÜLYA SAYKAL",
          label: "HÜLYA SAYKAL",
          icon: "pi pi-fw pi-calendar-plus",
          data: "HÜLYA SAYKAL",
        },
      ],
    },
    {
      key: "4",
      label: "Fizik",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Fizik - MUSTAFA ERDEN",
          label: "MUSTAFA ERDEN",
          icon: "pi pi-fw pi-calendar-plus",
          data: "MUSTAFA ERDEN",
        },
        {
          key: "Fizik - FATMA DOĞAN",
          label: "FATMA DOĞAN",
          icon: "pi pi-fw pi-calendar-plus",
          data: "FATMA DOĞAN",
        },
      ],
    },
    {
      key: "5",
      label: "Kimya",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Kimya - KORAY SÜRÜCÜOĞLU",
          label: "KORAY SÜRÜCÜOĞLU",
          icon: "pi pi-fw pi-calendar-plus",
          data: "KORAY SÜRÜCÜOĞLU",
        },
        {
          key: "Kimya - ELİF ALTUNAY",
          label: "ELİF ALTUNAY",
          icon: "pi pi-fw pi-calendar-plus",
          data: "ELİF ALTUNAY",
        },
      ],
    },
    {
      key: "6",
      label: "Biyoloji",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Biyoloji - DAMLA BAYEZİT",
          label: "DAMLA BAYEZİT",
          icon: "pi pi-fw pi-calendar-plus",
          data: "DAMLA BAYEZİT",
        },
      ],
    },
    {
      key: "7",
      label: "Tarih",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Tarih - KENAN İNAN",
          label: "KENAN İNAN",
          icon: "pi pi-fw pi-calendar-plus",
          data: "KENAN İNAN",
        },
      ],
    },
    {
      key: "8",
      label: "Coğrafya",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Coğrafya - RIZA GÖKÇE",
          label: "RIZA GÖKÇE",
          icon: "pi pi-fw pi-calendar-plus",
          data: "RIZA GÖKÇE",
        },
      ],
    },
  ]);
  const handleSubmit = () => {
    if (
      !konu ||
      !selectedNodeKey ||
      !selectedLessonDate ||
      !selectedStudent ||
      !date
    ) {
      return;
    }
    setIsValid(true);
    const yeniVeri = {
      konu,
      selectedNodeKey,
      selectedLessonDate,
      selectedStudent,
      date,
    };
    setCourse([...course, yeniVeri]);
    setIsValid(true);
    setKonu("");
    setSelectedNodeKey("");
    setselectedLessonDate("");
    setSelectedStudent("");
  };
  const downloadPDF = () => {
    const pdfContent = document.getElementById("pdf-content");

    html2pdf(pdfContent, {
      margin: 10,
      filename: "course_schedule.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <>
      <h2 className="text-center text-light py-5 fw-bold text-uppercase">
        Öğrenci Kurs Atama Programı
      </h2>
      <div className="container pt-60">
        <div className="row">
          <div className="col-lg-3 col-xd-12 position-relative">
            <MultiSelect
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.value)}
              options={students}
              placeholder="Öğrencileri Seçiniz"
              className="w-full md:w-50rem"
              required
            />
          </div>
          <div className="col-lg-3 col-xd-12 position-relative">
            <TreeSelect
              value={selectedNodeKey}
              onChange={(e) => setSelectedNodeKey(e.value)}
              options={nodes}
              className="md:w-20rem w-full"
              placeholder="Ders Seçiniz"
            ></TreeSelect>
          </div>
          <div className="col-lg-3 col-xd-12 position-relative">
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              dateFormat="dd/mm/yy"
              placeholder="Gün Seç"
              minDate={new Date()}
            />
            <MultiSelect
              value={selectedLessonDate}
              onChange={(e) => setselectedLessonDate(e.value)}
              options={lessonDate}
              placeholder="Ders Saati Seçiniz"
              className="w-full md:w-50rem mt-4"
            />
          </div>
          <div className="col-lg-3 col-xd-12 position-relative gap-5">
            <InputText
              value={konu}
              placeholder="Ders Konusu Giriniz"
              onChange={(e) => setKonu(e.target.value)}
            />
            <Button
              label="Kaydet"
              onClick={() => {
                handleSubmit();
              }}
            />
            <Button
              label="PDF'e Dönüştür"
              onClick={downloadPDF}
              className="mt-3"
            />
          </div>
        </div>
      </div>
      <div
        className={`${isValid ? "container-source container" : "d-none"}`}
        id="pdf-content"
      >
        <table id="myTable" className={`${isValid ? "" : "d-none"}`}>
          <thead>
            <tr>
              <th>Ögrenci</th>
              <th>Seçilen Ders</th>
              <th>Ders Konusu</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {course.map((item, index) => (
              <tr key={index}>
                <td>{item.selectedStudent.join(" - ")}</td>
                <td>{item.selectedNodeKey}</td>
                <td>{item.konu}</td>
                <td>
                  {item.date.toLocaleDateString()} - {item.selectedLessonDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
      {/* <img
        className="bg"
        src="https://c.wallhere.com/photos/5c/d7/university_teachers_school_blackboard_physics_mathematics_students_desk-255309.jpg!d"
        alt=""
      /> */}
    </>
  );
}

export default Course;
