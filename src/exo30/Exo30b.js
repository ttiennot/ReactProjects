function Exo30b() {
    const login = "tibo";
    const password = "caca";
    const isConnected = false;
    const cacaTypes = ["diarhée", "étron", "billes", "drisse"];
    return (
        <div>
            {isConnected ? (
                <div>
                    vous êtes connecté en tant que {login} et votre mot de passe est : {password}
                </div>

            ) : (
                <div>
                    <ul>
                    {
                        cacaTypes.map(caca =>(
                            <li>{caca}</li>
                        ))
                    }
                        
                    </ul>
                </div>
                )
            }
        </div>

    )
}

export default Exo30b;