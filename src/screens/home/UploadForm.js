import React, { useState } from "react";

export default function UploadForm({ closePopup }) {
  let [title, setTitle] = useState("");

  let [category, setCategory] = useState("");

  let [file, setFile] = useState("");

  return (
    <div>
      <form
        action="http://localhost:1818/upload"
        encType="multipart/form-data"
        method="POST"
      >
        <br />
        <label style={{ color: "White", fontWeight: "bold" }}>Title:</label>
        <input
          type="title"
          name="title"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <label style={{ color: "White", fontWeight: "bold" }}>Category:</label>
        <input
          type="category"
          name="category"
          value={category}
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <br />
        <br />
        <label style={{ color: "White", fontWeight: "bold" }}>File:</label>
        <input
          type="file"
          name="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          required
        />
        <br />

        <input
          type="submit"
          style={{
            border: "1px solid #ee830d",
            background: "linear-gradient(to bottom, #ffb02f 0%, #ff8e14 100%)",
            borderRadius: "1px",
            boxShadow: " 0 1px 0 #ffcc30 inset",
            height: 50,
            padding: "0% 5% 0px 5%",
            width: "60%",
            margin: "0px 0px 15px 0px",
            float: "left",
            fontFamily: "Arial, Helvetica, sans-serif",
            textShadow: "0px 1px 0px #ac6209",
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}
          value="Submit"
        />
      </form>

      <button
        style={{
          border: "1px solid #ee830d",
          background: "linear-gradient(to bottom, #ffb02f 0%, #ff8e14 100%)",
          borderRadius: "1px",
          boxShadow: " 0 1px 0 #ffcc30 inset",
          height: 50,
          padding: "0% 5% 0px 5%",
          width: "60%",
          margin: "0px 0px 15px 0px",
          float: "left",
          fontFamily: "Arial, Helvetica, sans-serif",
          textShadow: "0px 1px 0px #ac6209",
          fontSize: "24px",
          fontWeight: "bold",
          color: "white",
        }}
        onClick={(e) => {
          closePopup(false);
        }}
      >
        Close{" "}
      </button>
    </div>
  );
}
