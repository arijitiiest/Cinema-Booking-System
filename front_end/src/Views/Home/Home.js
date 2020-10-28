import React from "react";
import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import { Container } from 'react-bootstrap';
import "./Home.css";

const Home = props => {
    return (
        <div>
            <Navbar />
            <main className="py-3">
                <Container>
                    <h1>Welcome to Cholochitro Bhobon</h1>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default Home;