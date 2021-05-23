import React from 'react';
import './LatestUpdates.css';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import InfoIcon from '@material-ui/icons/Info';

const LatestUpdates = () => {
    return (
        <>
            <div className="bor">
                <div className="main-container">
                    <h1> <WbIncandescentIcon /> Latest Updates</h1>
                </div>
                <div className="container">
                    <div class="marquee" direction="up" scrollamount="3" height="200">
                        <p>
                            <InfoIcon fontSize="small" />
                            <a href="#">Last date of application submission for PMSS scheme of WARB has now been
                            extended till 25/04/2021.</a>
                        </p>
                        <p>
                            <InfoIcon fontSize="small" />
                            <a href="www.google.com">Last date of application submission for PMSS scheme of WARB has now been
                            extended till 25/04/2021.</a>
                        </p>
                        <p>
                            <InfoIcon fontSize="small" />
                            <a href="www.wiki.com">Last date of application submission for PMSS scheme of WARB has now been
                            extended till 25/04/2021.</a>
                        </p>
                        <p>
                            <InfoIcon fontSize="small" />
                            <a href="www.wiki.com">Last date of application submission for PMSS scheme of WARB has now been
                            extended till 25/04/2021.</a>
                        </p>
                        <p>
                            <InfoIcon fontSize="small" />
                            <a href="www.wiki.com">Last date of application submission for PMSS scheme of WARB has now been
                            extended till 25/04/2021.</a>
                        </p>

                    </div>
                </div>
            </div>

        </>
    );
}

export default LatestUpdates;