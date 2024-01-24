import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { TreeSelect } from "primereact/treeselect";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import html2pdf from "html2pdf.js";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  const [course, setCourse] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [konu, setKonu] = useState("");
  const [selectedNodeKey, setSelectedNodeKey] = useState([]);
  const [selectedLessonDate, setselectedLessonDate] = useState("");
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [date, setDate] = useState(new Date());
  const [students, setStudents] = useState([
    "Buğra Erden",
    "İrem Erden",
    "Sevde Erden",
    "Lorem",
    "Lorem2",
    "Lorem3",
    "Lorem4",
    "Lorem5",
  ]);
  const [lessonDate, setLessonDate] = useState([
    "09.00-9.40",
    "09.50-10.30",
    "10.40-11.20",
    "11.30-12.10",
  ]);
  const [nodes, setNodes] = useState([
    {
      key: "Türkçe",
      label: "Türkçe",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "Türkçe - Öğretmen 1",
          label: "Öğretmen 1",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Meeting",
        },
        {
          key: "Türkçe - Öğretmen 2",
          label: "Öğretmen 2",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Meeting",
        },
        {
          key: "Türkçe - Öğretmen 3",
          label: "Öğretmen 3",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Meeting",
        },
        {
          key: "Türkçe - Öğretmen 4",
          label: "Öğretmen 4",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Meeting",
        },
      ],
    },
    {
      key: "Matematik",
      label: "Matematik",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "Matematik - Öğretmen 1",
          label: "Öğretmen 1",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 1",
        },
        {
          key: "Matematik - Öğretmen 2",
          label: "Öğretmen 2",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 2",
        },
        {
          key: "Matematik - Öğretmen 3",
          label: "Öğretmen 3",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 3",
        },
      ],
    },
    {
      key: "2",
      label: "Fizik",
      data: "Fizik",
      icon: "pi pi-fw pi-star-fill",
      children: [
        {
          key: "Fizik - Öğretmen 1",
          label: "Öğretmen 1",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 1",
        },
        {
          key: "Fizik - Öğretmen 2",
          label: "Öğretmen 2",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 2",
        },
        {
          key: "Fizik - Öğretmen 3",
          label: "Öğretmen 3",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Öğretmen 3",
        },
      ],
    },
  ]);
  useEffect(() => {
    console.log(course); // Bu kısmı dilediğiniz yerde kullanabilirsiniz
  }, []);
  const handleSubmit = () => {
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
              className="w-full md:w-50rem mt-3"
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
                <td>{item.selectedStudent}</td>
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

export default App;
