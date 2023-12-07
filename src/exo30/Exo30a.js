function Exo30a() {
    const login = "tibo";
    const password = "caca";
    const isConnected = true;
    return (
        <div>
            {isConnected ? (
                <div>
                    vous êtes connecté en tant que {login} et votre mot de passe est : {password}
                </div>

            ) : (
                <div>
                    veuillez vous connecter
                </div>
                )
            }
        </div>

    )
}

export default Exo30a;