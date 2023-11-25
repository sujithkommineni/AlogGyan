import Head from "next/head";
import Layout from "../components/layout";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact us - AlgoGyan</title>
            </Head>
            <h1 className="text-theme my-5">Contact us</h1>
            <div className="d-flex gap-5 flex-wrap">
                <div className="flex-fill">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><div className="d-flex gap-5"><i class="bi bi-telephone-fill text-theme"></i> <span>+91-9550333923 / +1-647-763-8389</span></div></li>
                        <li class="list-group-item"><div className="d-flex gap-5"><i class="bi bi-whatsapp text-theme"></i> <span>+91-9550333923 / +1-647-763-8389</span></div></li>
                        <li class="list-group-item"><div className="d-flex gap-5"><i class="bi bi-envelope-fill text-theme"></i> <span>info@algogyan.com</span></div></li>
                    </ul>
                </div>

                <div className="flex-fill img-fluid">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9920003955926!2d78.39434301537139!3d17.507895303925398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e4dacd6927%3A0x71ecb39a36fa87d5!2sSree%20Padha%20Lake%20Pearl%2C%20Krishnaveni%20Nagar%2C%20Tulasi%20Nagar%2C%20Chenchu%20Guda%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1635869436588!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" className="w-100"></iframe>
                </div>

            </div>
        </Layout>
    );
}