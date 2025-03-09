import styles from "./page.module.css";
import Image from 'next/image'



export default function Home() {
  return (
    <>
    {/* favicon maker: https://www.favicon.cc/?  highly pixelated imagery */}
    <section colorscroll-mode="2" className="pink-bg">
        <div className="w-layout-blockcontainer container-regular _2col wide w-container">
            <div className="sidebar">
                <div className="text-border">**************</div>
                <h2 className="h2"><strong className="bold-text-2">crypto DNA</strong></h2>
            </div>
            <div className="_2-col-content">
                <h1 className="h1 page-h1">Autonomous Protocol Assembly and Related Transactions (APART)</h1>
                <div>
                    <h1 className="h2 page-h2 flex-50">
                        We envision a world where AI navigates the complexities of crypto to help users realize the promises of Web3. By leveraging existing solutions and connecting blockchain primitives—-such as staking protocols, block enrichment services, and proof systems—-AI can assemble custom solutions on demand without reinventing the wheel. 
                    </h1>
                    <h1 className="h2 page-h2"></h1>
                </div>
            </div>
        </div>
    </section>

    <section colorscroll-mode="2" className="pink-bg hidden">
        <div className="w-layout-blockcontainer container-regular _2col wide low w-container">
            <div className="sidebar">
                <div className="text-border">**************</div>
                <h2 className="h2"><strong className="bold-text-2"></strong></h2>
            </div>
            <div className="_2-col-content split-column">
                <h3 className="h3 text-transition full-width"></h3>
                <p className="hidden"></p>
            </div>
        </div>
    </section>
    <div className="separator"></div>
    
    <div className="separator transition no-margin"></div>
    
    <div className="separator"></div>
    
    
    <div className="page_wrap">
        <div className="page_code_wrap-2">
            <div className="page_code_custom w-embed">
                
            </div>
        </div>
    </div>
    {/* <script src="./dovetails_apart_files/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="./dovetails_apart_files/webflow.735a86a08ca7b50d68622756e8c38bea.js" type="text/javascript"></script> */}
    </>
  );
}
