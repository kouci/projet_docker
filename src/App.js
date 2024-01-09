import React, { useState } from "react";
import "./App.css";

function App() {
    const [adresse, setAdresse] = useState({
        rue: "",
        ville: "",
        codePostal: "",
        pays: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdresse((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));

        // Vérifier si tous les champs sont remplis
        const allFieldsFilled = Object.values(adresse).every(
            (field) => field !== ""
        );

        // Mettre à jour le message d'erreur si un champ est vidé
        if (value.trim() === "") {
            setErrorMessage(`Le champ "${name}" doit être renseigné.`);
        } else {
            setErrorMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allFieldsFilled = Object.values(adresse).every(
            (field) => field !== ""
        );
        if (allFieldsFilled) {
            setSuccessMessage("Adresse créée avec succès!");
            setErrorMessage("");
            setAdresse({
                rue: "",
                ville: "",
                codePostal: "",
                pays: "",
            });
            console.log("Adresse soumise :", adresse);
        } else {
            setErrorMessage("Tous les champs doivent être renseignés.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="content-app">
            <header className="App-header">
                <h3>Création d'adresse</h3>
                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
                <hr style={{ color: "black" }} />
                <form className="formulaire" onSubmit={handleSubmit}>
                    <p>Créer une adresse</p>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                    <input
                        type="text"
                        name="rue"
                        value={adresse.rue}
                        onChange={handleChange}
                        placeholder="Rue"
                    />

                    <input
                        type="text"
                        name="ville"
                        value={adresse.ville}
                        onChange={handleChange}
                        placeholder="Ville"
                    />

                    <input
                        type="text"
                        name="codePostal"
                        value={adresse.codePostal}
                        onChange={handleChange}
                        placeholder="Code postal"
                    />

                    <input
                        type="text"
                        name="pays"
                        value={adresse.pays}
                        onChange={handleChange}
                        placeholder="Pays"
                    />

                    <button className="btn" type="submit">
                        Ajouter
                    </button>
                </form>
            </header>
        </div>
    );
}

export default App;
