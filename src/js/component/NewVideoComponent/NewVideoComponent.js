import React from 'react';
import { FaClipboardList, FaComments, FaChartBar, FaRobot } from 'react-icons/fa';
import './NewVideoComponent.css';
import video2 from '../../../img/video2.mp4';

const NevVideoComponent = () => {
    return (
        <section id="nevvideocomponent">
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={video2} type="video/mp4" />
                </video>
                <div className="content-container">
                    <div className="feature">
                        <i className="icon"><FaClipboardList /></i>
                        <h3 className="feature-title">Gestión de tickets</h3>
                        <p className="feature-description">Organiza y responde a los tickets de tus clientes de manera eficiente.</p>
                    </div>
                    <div className="feature">
                        <i className="icon"><FaComments /></i>
                        <h3 className="feature-title">Chat en vivo</h3>
                        <p className="feature-description">Ofrece soporte en tiempo real a través de un chat en vivo integrado.</p>
                    </div>
                    <div className="feature">
                        <i className="icon"><FaChartBar /></i>
                        <h3 className="feature-title">Paneles de control</h3>
                        <p className="feature-description">Obtén información valiosa con paneles de control y análisis en tiempo real.</p>
                    </div>
                    <div className="feature">
                        <i className="icon"><FaRobot /></i>
                        <h3 className="feature-title">Respuestas IA</h3>
                        <p className="feature-description">Contesta correos automáticamente mediante inteligencia artificial.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NevVideoComponent;