import React from "react";

export default function ZipCode() {
  return (
    <div>
      <h1>ZipCode</h1>
      {/* <button type="submit">ZipCoder</button> */}
      <form>
        <input
          className="form-control me-2 header-signin"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="form-control me-2 header-signin"
          type="password"
          name="password"
          placeholder="password"
        />
        <button
          className="btn btn-outline-danger"
          type="button"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
