import React from "react";
import Layout from "../../../components/Layout/Layout";
import "./thanks.scss";

export default () => (
  <Layout>
    <section className="thanks__section">
      <div className="thanks__container">
        <div className="thanks__content">
          <h1 className="thanks__title">Thank you!</h1>
          <p className="thanks__message">
            This is a custom thank you page for form submissions
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
