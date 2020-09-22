import React, { useEffect, useState } from 'react';

import Input from '../../components/Input';

const Login = () => {
    return(
        <>
            <div class="container">
            <div>
                <Input />

            </div>
            <div>
                <Input /> {/*As props funcionam em forma de cascata, sendo assim se passada da forma certa irá substituir o que já está definido no component*/}  
            </div>

            </div>
        </>
    )
}

export default Login;