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
                            src="https://images.unsplash.com/photo-1612928414075-bc722ade44f1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
                    </div>
                    <div>
                        <h4 className="my_name">Igor Garcia</h4>
                        <div className="descricao">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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