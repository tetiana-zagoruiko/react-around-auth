import React from 'react';

function InfoTooltip({ isOpen, onClose, infoTooltipText, infoTooltipImage}) {

    return (
        <div>
            {isOpen ? (
                <div className={`popup popup_opened`}>
                    <div className="popup__content">
                        <div className="popup_type_infotooltip">
                            <img src={infoTooltipImage} alt="symbol" className="popup__content_image" />
                            <p className="popup__content_text">{infoTooltipText}</p>
                            <button className="popup__close" onClick={onClose}></button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div>
                    </div>
                )}
        </div>
    );
}

export default InfoTooltip;