import React from 'react';
import {func} from 'prop-types';

import { imagePage,  imageProperties} from '../types';

const MainPageForm = ({onChange, imagePage }) => {
    <div>
        <text onChange={onChange} />
        <img src={imageProperties.imageUri} />
        <text values={imagePage} />
    </div>
}

MainPageForm.propTypes = {
    onChange: func.isRequired,
    imagePage: imagePage.isRequired
  };
  
export default MainPageForm;