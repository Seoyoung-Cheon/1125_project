import React from "react";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%", // 사이드바 너비를 화면의 28%로 설정
        height: "100vh", // 전체 화면 높이
        backgroundColor: "#343a40", // 배경색 (어두운 회색)
        color: "#fff", // 텍스트 색상 (흰색)
        padding: "20px", // 내부 여백
        boxSizing: "border-box", // 테두리와 패딩 포함 크기 계산
        position: "fixed", // 화면에 고정
        top: 0, // 화면 상단에 맞춤
        left: 0, // 화면 왼쪽에 맞춤
        overflowY: "auto", // 콘텐츠가 넘치면 스크롤 가능
        marginTop: "4rem", // 상단 여백
      }}
    >
      {/* 검색창 추가 */}
      <div style={{ marginBottom: "20px", display: "flex" }}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요..."
          style={{
            width: "80%", // 입력 필드가 사이드바 너비를 채움
            padding: "10px",
            borderRadius: "5px", // 둥근 모서리
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />
        <FaSearch
          style={{
            fontSize: "40px",
            marginLeft: "2rem",
          }}
        />
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <a href="#menu1" style={{ color: "#fff", textDecoration: "none" }}>
            메뉴 1
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="#menu2" style={{ color: "#fff", textDecoration: "none" }}>
            메뉴 2
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="#menu3" style={{ color: "#fff", textDecoration: "none" }}>
            메뉴 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
