import React from 'react';
import '../css/footer.css'

export const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footerBox">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affilate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="#">Pc Games</a></li>
                                <li><a href="#">PS4 Games</a></li>
                                <li><a href="#">PS5 Games</a></li>
                                <li><a href="#">Xbox Games</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>find us on</h4>
                            <div class="social-links">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">
                                    <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" />
                                </svg></a>
                            </div>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer