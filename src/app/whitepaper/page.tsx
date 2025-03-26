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
                        <h2 className="h2"><strong className="bold-text-2">whitepaper</strong></h2>
                    </div>
                    <div className="_2-col-content">
                        <h1 className="h1 page-h1">Introduction</h1>
                        <div>
                            <h1 className="h2 page-h2 flex-50">
                                Imagine telling a chatbot to tokenize a valuable artwork so you can sell fractional ownership while retaining an owner’s stake. The chatbot generates a step-by-step plan—including registering a shell company to custody the artwork and minting tokens on some external blockchain to represent shares of the holding company (typical tokenization process). The chatbot agrees to execute these steps in exchange for compensation, such as a small portion of the artwork tokens. Additionally, it negotiates pay for the AI agents involved and collects funds for transaction fees.
                            </h1>
                            <h1 className="h2 page-h2"></h1>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="h2 page-h2 flex-50">
                                With its own wallet, the chatbot specializes in crypto solutions, outsourcing tasks like blockchain integration and legal structuring to a network of agents. Critical implementation details, such as company registration and token issuance, are recorded on-chain for financial synchronicity. Rather than building isolated platforms exclusive for tokenizing assets like artworks, real-estate or DAOs—-where infrastructure is repeatedly reinvented—-this system leverages existing protocols, eliminating redundant validator sets and cumbersome UIs.
                            </h1>
                            <h1 className="h2 page-h2"></h1>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="h2 page-h2 flex-50">
                                We envision a world where AI navigates the complexities of crypto to help users realize the promises of Web3. By leveraging existing solutions and connecting blockchain primitives—-such as staking protocols, block enrichment services, and proof systems—-AI can assemble custom solutions on demand without reinventing the wheel.
                            </h1>
                            <h1 className="h2 page-h2"></h1>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="h2 page-h2 flex-50">
                                Sometimes the chatbot may simply delegate a user's request to an existing protocol. Other times, agents might generate smart contracts or integrate off-the-shelf blockchain mechanisms to assemble new protocols. These mechanisms may be free or monetized, giving rise to a marketplace of mechanisms. The underlying LLM for this AI powered Web3 builder will master how crypto mechanisms and infrastructure primitives interconnect—-distilling the entirety of crypto functionality into a DNA for generating Web3 solutions.
                            </h1>
                            <h1 className="h2 page-h2"></h1>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="h2 page-h2 flex-50">
                                The initial focus will be creating an AI chatbot capable of outputting reliable steps for autonomously tokenizing RWAs and creating DAOs. Once fine-tuned on everything crypto and DLT, this system can reach its next phase, Ouroboros: the snake eating its own tail. By feeding its own codebase into itself, the AI will iterate on ways to fully decentralize and automate its own infrastructure, evolving into an unstoppable, self-improving chatbot working in tandem with a swarm of agents for a Web3 that builds itself.
                            </h1>
                            <h1 className="h2 page-h2"></h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
