import Image from 'next/image'
import Header from "@/components/Header";

export default function Whitepaper() {
  return (
    <>
      <Header />

      <section className="pink-bg">
        <div className="w-layout-blockcontainer container-regular _2col wide w-container">
          <br />
          <br />
          <br />
          <div className="sidebar">
            <div className="text-border">**************</div>
            <h2 className="h2"><strong className="bold-text-2">questions</strong></h2>
          </div>
          <div className="_2-col-content">
            <h1 className="h1 page-h1">Questions</h1>
            <div>
              <h1 className="h2 page-h2 flex-50">
                How will monetization work?
              </h1>
              <br />
              <h1 className="h2 page-h2">Whenever someone uses the system to create a crypto solution—-such as tokenizing a real-world asset or establishing a financial supply chain—the system will negotiate a small share of the assets being created or transacted. Over time, a diverse portfolio of tokens will be aggregated and managed autonomously.</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
