import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import ChooseBooking from "./ChooseBooking";
import DetailBooking from "./DetailBooking";
import { Card, Input, Radio } from "antd";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import { Icon } from "@iconify/react";
import moment from "moment";
import { useRouter } from "next/router";
import {
  convertDaysToNumbers,
  getArrayEveryNDayDates,
  getArrayEveryNDayDatesFromToday,
  transformDatesToFormatDaysOff,
  transformDatesToFormatDaysOn,
} from "../../lib/getEveryDate";
import axios from "axios";
import { toast } from 'react-toastify';

// const disabledDays = [
//   {
//     year: 2023,
//     month: 6,
//     day: 19,
//   },
//   {
//     year: 2023,
//     month: 6,
//     day: 29,
//   },
//   {
//     year: 2023,
//     month: 6,
//     day: 27,
//   },
// ];

const availableDays = [
  {
    year: 2023,
    month: 6,
    day: 20,
    className: "GrDay",
    hour: {
      available: [9, 10, 17, 19, 20, 21],
      unavailable: [8, 18],
    },
  },
  {
    year: 2023,
    month: 6,
    day: 21,
    className: "GrDay",
    hour: {
      available: [9, 17, 19, 21],
      unavailable: [8, 10, 18, 20],
    },
  },
  {
    year: 2023,
    month: 6,
    day: 22,
    className: "GrDay",
    hour: {
      available: [8, 9, 10, 17, 19, 20, 21],
      unavailable: [18],
    },
  },
  {
    year: 2023,
    month: 6,
    day: 23,
    className: "GrDay",
    hour: {
      available: [8, 9, 10, 17, 18, 19, 20, 21],
      unavailable: [],
    },
  },
  {
    year: 2023,
    month: 6,
    day: 24,
    className: "GrDay",
    hour: {
      available: [9],
      unavailable: [8, 10, 17, 18, 19, 20, 21],
    },
  },
];

function BookingJadwalContent({ dokter, id1 }) {
  const router = useRouter();
  const data = router.query.id && dokter[router.query.id - 1];
  // console.log(id1)
  const [selectedDay, setSelectedDay] = useState(utils().getToday());
  const [filteredDate, setFilteredDate] = useState([]);
  const [valuejam, setValuejam] = useState();
  const [nama, setnama] = useState();
  const [phone, setphone] = useState();
  const [rekamMedis, setrekamMedis] = useState();
  const [showRekamMedis, setshowrekamMedis] = useState(false);
  const [showCalendar, setshowCalendar] = useState(true);
  const [kategoriPasien, setKategoriPasien] = useState();
  const [keluhan, setkeluhan] = useState();
  const [errornama, seterrornama] = useState(false);
  const [errorphone, seterrorphone] = useState(false);
  const [errorphone2, seterrorphone2] = useState(false);
  const [errorkategori, seterrorkategori] = useState(false);
  const [errorrekam, seterrorrekam] = useState(false);
  const regExPhone = /^(\+62|62)8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_APP_API_URL || "http://localhost:3000";
  const urlxendit = "https://checkout.xendit.co/web/";
  
  const { TextArea } = Input;
  const onChangeKategori = (e) => {
    setKategoriPasien(e.target.value);
    if (e.target.value == "lama") {
      setshowrekamMedis(true);
    } else {
      setshowrekamMedis(false);
    }
  };

  const filterData = availableDays.filter(
    (item) =>
      item.day == selectedDay.day &&
      item.month == selectedDay.month &&
      item.year == selectedDay.year
  );
  const mappingJam = filterData.map((item) => item.hour);
  const availableHour = mappingJam.map((item) => item.available);
  const unavailableHour = mappingJam.map((item) => item.unavailable);
  const allHour = availableHour.flat(1).concat(unavailableHour.flat(1));
  const sortAllHour = allHour.sort(function (a, b) {
    return a - b;
  });
  const chkDisabled = () => {
    if (allHour.indexOf(unavailableHour) !== -1) return true;
  };

  // Minggu jadi Days off
  const AllHariMingguOffInThisYear = getArrayEveryNDayDates(["0"]);
  const disabledMingguDaysDynamic = transformDatesToFormatDaysOff(
    AllHariMingguOffInThisYear
  );

  // Jadwal Days off
  const JadwalHariOff = data && data.jadwal && data.jadwal.filter((jadwal) => !jadwal.jam);
  const convertHariOff = convertDaysToNumbers(
    JadwalHariOff && JadwalHariOff.map((hari) => hari.hari)
  );
  const AllHariOffInThisYear = getArrayEveryNDayDates(convertHariOff);
  const disabledDaysDynamic =
    transformDatesToFormatDaysOff(AllHariOffInThisYear);

  // Jadwal Days on
  const JadwalHariOn = data.jadwal.filter((jadwal) => jadwal.jam);
  const convertHariOn = convertDaysToNumbers(
    JadwalHariOn.map((hari) => hari.hari)
  );
  const AllHariOnInThisYear = getArrayEveryNDayDatesFromToday(convertHariOn);

  // Jadwal Days on Jam on
  const availableDaysDynamic = transformDatesToFormatDaysOn(AllHariOnInThisYear);

  function bayar(){
    setLoading(true);
    seterrornama(false)
    seterrorphone(false)
    seterrorkategori(false)
    seterrorrekam(false)
    if(!nama || !phone || !kategoriPasien){
      if(!nama){
        setLoading(false);
        seterrornama(true)
      }
      if(!phone){
        setLoading(false);
        seterrorphone(true)
      }
      // if(phone && !phone.match(regExPhone)){
      //   seterrorphone2(true)
      //   setLoading(false)
      // }
      if(!kategoriPasien){
        setLoading(false);
        seterrorkategori(true)
      }
      if(kategoriPasien == "lama" && !rekamMedis){
        setLoading(false);
        seterrorrekam(true)
      }
    }else{
      axios.post(`${url}/api/booking/add`,{nama, phone:phone.toString(), kategori:kategoriPasien, no_rekam_medis:rekamMedis, keluhan, 
        tanggal_booking:moment(selectedDay.year+'-'+selectedDay.month+'-'+selectedDay.day).format("YYYY-MM-DD"), jam_booking: valuejam, id_dokter:router.query.id},{
        headers: {
          'Content-Type': 'application/json',
        },}).then(res => {
          if(res.status==200){
            // console.log(res.data)
            router.push(`${urlxendit}`+res.data.result.insertId)
          }       
      })
      .catch(function (error) {
        setLoading(true);
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if(error.response.status == 404){
              toast.error(error)
              setLoading(false);
            }
          } else if (error.request) {
            console.log(error.request);
            setLoading(false);
          } else {
            console.log('Error', error.message);
            setLoading(false);
          }})
    }
  }

  return (
    <Wrapper id="findUs">
      <StyledSectionTitle>Booking Jadwal</StyledSectionTitle>
      <Config>
        {/* <PC> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-12 my-2">
              <Card
                // title={<p>&nbsp;</p>}
                // headStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}
                style={{
                  width: "100%",
                  maxheight: "auto",
                  minHeight: "100%",
                  backgroundColor: "white",
                  borderRadius: "1.5rem",
                  boxShadow: "0px 4px 20px rgba(192, 192, 192, 0.25)",
                }}
              >
                {/* <ChooseBooking /> */}
                {showCalendar ? (
                  <div className="row align-items-center align-self-center">
                    <div className="col-lg-5 col-12">
                      <Calendar
                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                        minimumDate={utils().getToday()}
                        disabledDays={disabledDaysDynamic.concat(
                          disabledMingguDaysDynamic
                        )} // here to disable off days
                        customDaysClassName={availableDaysDynamic}
                        colorPrimary="#DF3034"
                        calendarClassName="responsive-calendar"
                        renderFooter={() => (
                          <div className="row align-items-center text-center">
                            <StyledSelected className="col-4">
                              Selected
                            </StyledSelected>
                            <StyledAvailable className="col-4">
                              Available
                            </StyledAvailable>
                            <StyledNotAvail className="col-4">
                              Not Available
                            </StyledNotAvail>
                          </div>
                        )}
                      />
                    </div>
                    <div className="col-lg-7 col-12">
                      <div>
                        {/* <DetailDokter /> */}
                        <div className="row">
                          <div className="col-lg-3 col-12">
                            <img
                              src={"/" + data.image}
                              alt="doctor1"
                              width="100%"
                            />
                          </div>
                          <div className="col-lg-9 col-12">
                            <StyledTitle>{data.name}</StyledTitle>
                            <StyledText>{data.position}</StyledText>
                            <StyledTextWIcon>
                              <Icon
                                icon="ion:medkit"
                                className=""
                                style={{
                                  cursor: "pointer",
                                  fontSize: "var(--fs-24)",
                                  color: "#8D8D8D",
                                  marginRight: "2%",
                                }}
                              />
                              Pengalaman: {data.xp} tahun
                            </StyledTextWIcon>
                          </div>
                        </div>
                      </div>
                      <div>
                        {/* <RenderJam data={availableDays} selectedDate={selectedDay} /> */}
                        <RenderJamWrapper className="section">
                          {sortAllHour.map((item, i) => (
                            // <ButtonJam text={item} disabled={chkDisabled} />
                            <BtnWrapper
                              // onClick={(e) => handleInput(e, "value")}
                              key={i}
                              onClick={(e) => setValuejam(e.target.value, "value")}
                            >
                              <StyledButton value={item}>
                                {moment(item, "HH").format("HH:mm")}
                              </StyledButton>
                            </BtnWrapper>
                          ))}
                        </RenderJamWrapper>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row align-items-center align-self-center">
                    <div className="col-md-7 col-12 p-3">
                      <span className="bookingInputLabel py-2">
                        Nama lengkap pasien<span className='required'>*</span>
                      </span>
                      <Input
                        placeholder="Tulis nama lengkapmu di sini"
                        value={nama}
                        onChange={(event) => setnama(event.target.value)}
                      />
                      {
                        errornama &&  
                        <span className='error mt-4'>Nama Anda harus diisi!</span>
                      }
                    </div>
                    <div className="col-md-5 col-12 p-3">
                      <span className="bookingInputLabel py-2">
                        Nomor Telepon<span className='required'>*</span>
                      </span>
                      <Input
                        placeholder="Tulis nomor HP di sini"
                        value={phone}
                        type="number"
                        onChange={(event) => setphone(event.target.value)}
                      />
                      {
                        errorphone &&  
                        <span className='error mt-4'>Nomor Telepon Anda harus diisi!</span>
                      }
                    </div>
                    <div className="col-12 p-3">
                      <span className="bookingInputLabel py-2">
                        Kategori Pasien<span className='required'>*</span>
                      </span>
                      <br></br>
                      <Radio.Group
                        className="kategori"
                        onChange={onChangeKategori}
                        value={kategoriPasien}
                      >
                        <Radio value="baru">Pasien Baru</Radio>
                        <Radio value="lama">Pasien Lama</Radio>
                      </Radio.Group>
                      <br></br>
                      {
                        errorkategori &&  
                        <span className='error mt-4'>Kategori harus dipilih!</span>
                      }
                    </div>
                    {showRekamMedis && (
                      <div className="col-md-6 col-12 p-3">
                        <span className="bookingInputLabel py-2">
                          Nomor Rekam Medis<span className='required'>*</span>
                        </span>
                        <Input
                          placeholder="Ex: 12345678"
                          value={rekamMedis}
                          onChange={(event) =>
                            setrekamMedis(event.target.value)
                          }
                        />
                        {
                        errorrekam &&  
                          <span className='error mt-4'>Rekam medis harus diisi!</span>
                        }
                      </div>
                    )}
                    <div className="col-12 p-3">
                      <span className="bookingInputLabel py-2">Keluhan<span className='required'>*</span></span>
                      <TextArea
                        placeholder="Tulis keluhanmu di sini"
                        value={keluhan}
                        onChange={(event) => setkeluhan(event.target.value)}
                        rows={3}
                      />                                                      
                    </div>
                  </div>
                )}
              </Card>
            </div>
            <div className="col-lg-3 col-12 my-2">
              <DetailBooking
                value={valuejam}
                dateItem={selectedDay}
                showCalendar={showCalendar}
                setshowCalendar={setshowCalendar}
                bayar={bayar}
                loading={loading}
              />
            </div>
          </div>
        </div>
        {/* </PC> */}

        <MOBILE></MOBILE>
      </Config>
    </Wrapper>
  );
}

export async function getServerSideProps({ req, params }) {
  const { id1 } = params;

  return {
    props: {
      id1: id1,
    },
  };
}

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  background: #edf6ff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  padding-top: 10%;
`;

const Config = styled.div`
  font-family: "Poppins";
  padding: 2% 5% 10% 5%;
  overflow: hidden;

  @media (max-width: 1121px) {
    padding: 5%;
  }
`;

const PC = styled.div`
  @media (max-width: 1120px) {
    display: none;
  }
`;

const MOBILE = styled.div`
  @media (min-width: 1121px) {
    display: none;
  }
`;

const StyledSectionTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-32);
  color: #a5090c;

  padding: 0 0 0 5%;
`;

const StyledSelected = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  color: #df3034;

  display: list-item;
  list-style-type: "•";
  list-style-position: inside;
`;

const StyledAvailable = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  color: #09a53e;

  display: list-item;
  list-style-type: "•";
  list-style-position: inside;
`;

const StyledNotAvail = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  color: #8d8d8d;

  display: list-item;
  list-style-type: "•";
  list-style-position: inside;
`;

const StyledTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-18);
  color: #433b3b;

  margin-bottom: 2%;
`;

const StyledText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  text-align: "center";
  font-size: var(--fs-14);
  color: #8d8d8d;

  margin-bottom: 10%;
`;

const StyledTextWIcon = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  text-align: "center";
  font-size: var(--fs-14);
  color: #8d8d8d;
`;

const RenderJamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  grid-gap: 1rem;

  overflow-y: auto;
  width: 100%;
  height: 14.813rem;
`;

const BtnWrapper = styled.div`
  padding: 5% 0 0 0;
`;

const StyledButton = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  padding: 0.8rem 4rem;

  background: #ffffff;
  border: 0.2rem solid #e0e0e0;
  border-radius: 1rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-14);

  :focus {
    color: #ffffff;
    background: #df3034;
  }
`;

export default BookingJadwalContent;