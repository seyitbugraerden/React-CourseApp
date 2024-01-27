import React, { useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Course from "./components/Course";
import Classes from "./components/Classes";

function App() {
  const [isTurned, setIsTurned] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const onbirea = [
    "OZAN ATA DURAK",
    "HİRA BOYRAZ",
    "İLAYDA SÜMEYRA ÖNDER",
    "EGE YELTEKİN",
    "SELVİNUR ÖZCAN",
    "DEFNE TANRIVERDİ",
  ];
  const onbirsaya = [
    "AYŞENUR ÜLGER",
    "NESLİHAN ŞAHİN",
    "KUZEY TANRIVERDİ",
    "CAHİT EFE ŞSHİN",
    "ŞEVVAL ECEM ÖZDEMİR",
    "YİĞİT EFE SEYLAN",
    "AHMET YAVUZHAN FINDIK",
    "MEHLİKA REYYAN ÖZDEMİR",
    "MUHAMMED YİĞİT AĞIR",
    "MUHAMMMED EREN BABAYİĞİT",
    "ECENAZ TAYFUN",
    "IRMAK AKSOY",
    "FİRDEVS NUR COŞAN",
  ];
  const onbirsayb = [
    "ELİF ŞİMŞEK",
    "TUĞBA DEFNE ÖZDEMİR",
    "MEHMET ASLAN",
    "MELİH KEREM ÜLGER",
    "CEYDA DEMİRÖS",
    "ELİF SELEN ESER",
    "SEFA ÇAĞRI ALACAHAN",
    "YAĞMUR AZRA ÇELEBİ",
    "HİLAL ÜLKER",
    "ENES YEŞİLDAL",
    "ERBERK HİKMET",
    "MUSTAFA SALİHCAN DALKIRAN",
  ];
  const onikiea = [
    "MUSTAFA SELİM KOÇ",
    "BEYZA NUROĞLU",
    "İBRAHİM ALP TAŞKIRAN",
    "MEHLİKA KORKUTATA",
    "SİNAN GEZER",
    "ELANUR ALTUNTAŞ",
    "SEDA AKYÜREK",
    "MUHAMMED GÜNEY",
    "NAZ YILMAZ",
    "EBRAR TUKAT",
    "HATİCE KÜBRA DEMİRAL",
  ];
  const onikisaya = [
    "ASYA SANEM SAYLAN",
    "SUDENAZ KILIÇ",
    "CEMRE NAZ ÖZKAN",
    "ESMA NUR MERCAN",
    "HALİS SERKAN ÇAKMAKCI",
    "RANA ATALAY",
    "FATMANUR ŞİRİN",
  ];
  const onikisayb = [
    "ADNAN EMRE TAŞKIRAN",
    "TUANA ÖZDEMİR",
    "ÖMER MERT AYAZ",
    "TAHSİN KOCAOĞLU",
    "ECRİN YAĞMUR",
    "ZEYNEP SÜMEYYE AKGÜN",
    "ELİF EBRAR AKSOY",
  ];
  const msaya = [
    "MUHAMMED SALİH DURGUT",
    "EFE SARI",
    "SALİH EMİN ÜNAL",
    "ÖMER FARUK AVAL",
    "ZEHRA MEKİK",
    "SUDENUR KAMACI",
    "İREM YAĞMUR ACAR",
    "SEDEN DOĞAN",
    "MELİH ARIDURU",
    "RAVZA NUR ALPAGUT",
    "BEKİR KERİM EKTİ",
    "BAYRAM BERAT AKAR",
    "METİN KILIÇ",
    "ŞÜHEDA ILICA",
    "BETÜL İLKİM KARTAL",
  ];
  const msayb = [
    "NİDANUR AKÇAN",
    "ŞİAR ABDURRAHMAN ÇELİK",
    "İREM BOZKURT",
    "MUHAMMED YAHYA KUTOĞLU",
    "EREN GÖDEN",
    "NAZLI SENA ÇELİKER",
    "ELİF EYLÜL DURMAZ",
    "EMİRHAN KARAMAN",
    "SİDELYA ŞİMAN",
    "SUDE GÜL",
    "AHMET KARADÖL",
  ];
  const meaa = [
    "CEYLİN KAPLAN",
    "AZRA KARABAYIR",
    "ARZUM NUR ARSLAN",
    "ZEREN NURUAN",
    "GÖZDE KILIÇER",
    "AHMET KASIM",
    "MERVE AYDIN",
    "RÜVEYDA İPEK TOPAÇ",
    "ELİF BEYZA GÖKÇE",
    "DAMLA SÜRÜCÜOĞLU",
    "GÜL AYANOĞLU",
  ];
  const meab = [
    "KAAN ARSLAN UZUNOĞLU",
    "BELİNAY DEMİROĞLU",
    "İSMAİL MEHMET MERT CİVAN",
    "EFE HALİT DEMİRCİ",
    "AHMET CAN MERCAN",
    "MUHAMMET SALİH AYDIN",
    "RANA BERİN IRMAK",
    "FEYZA NUR DEMİRTAŞ",
    "HAMDİ ARDA AKIN",
    "EFİL TUANA ŞAHİNDOKUYUCU",
    "MELİSA KAPLAN",
    "KAĞAN AKAR",
  ];
  const handleDataSelected = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsTurned(false);
    }, 1000);
  };

  return (
    <>
      {loading ? (
        <ProgressSpinner />
      ) : isTurned ? (
        <Classes onDataSelected={handleDataSelected} />
      ) : (
        <Course setData={selectedData} />
      )}
    </>
  );
}

export default App;
