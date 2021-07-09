import React from 'react';
import '../App.css';
import PageNavbar from '../components/PageNavbar';
import PageFooter from '../components/PageFooter';
import './AboutPage.css'

function AboutPage() {
    return (
        <div>
            <header className="App-header">
                <PageNavbar />
            </header>
            <body>
                <div className="page_body">
                    <div >
                        <img className="profile_img"
                            src="https://media-exp3.licdn.com/dms/image/C5603AQHelRmXgdfFow/profile-displayphoto-shrink_800_800/0/1598043811226?e=1631145600&v=beta&t=BhJjrV-53WtgDZmj7V_-0VaJNvAc6tfoG4rzHAkh9OI" />
                    </div>
                    <div>
                        <h4 className="my_name">Igor Garcia</h4>
                        <div className="descricao">
                            <p>Estudante de engenharia de computação. Tenho grande interesse
                            nas áreas voltadas a design e modelagem 3D. Tenho alguns trabalhos 
                            acadêmicos nas áreas de desenvolvimento de jogos com Unity e Godot.
                            Participei também em projetos de hardwere utilizando Arduíno, Raspberry Pi
                            FPGA.
                            Como estudos paralelos, gosto de praticar o inglês e o japonês, além de
                            treinar programação utilizando outras linguagens e ferrementas, tais como
                            Python, JavaScript, HTML/css, JQery e bancos de dados (MySQL, PostgresSQL e MongoDB).
                            </p>
                        </div>
                    </div>
                </div>

            </body>
            <footer>
                <PageFooter/>
            </footer>
        </div>
    );
}

export default AboutPage;