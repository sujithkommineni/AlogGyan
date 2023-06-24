import Image from 'next/image';
import Mobile from '../public/images/laptop_mobile_green.svg';

export default function Courses() {
    return (
        <section className="my-5">
                <h1 className="mb-5">Cources we offer </h1>
                <div className="row g-5">
                    <div className="col-md">
                        <div className="card p-5 h-100">
                            <Image src={Mobile} className="img-fluid m-3" alt="mobile image" />
                            <h4 className="text-theme">Android development using Kotlin</h4>
                            <p className="mt-4">Kotlin is a modern multi-paradigm language with a very concise code. It is now the recommended language for Android application development.</p>
                            <p>Our android development in Kotlin begins with a quick introduction to Kotlin and then deep dives into App development using Kotlin. You will learn how to develop apps with the latest material UI and how to store data locally as well as on server.</p>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card p-5 h-100">
                            <Image src={Mobile} className="img-fluid m-3" alt="mobile image" />
                            <h4 className="text-theme">Android development using Java</h4>
                            <p className="mt-4">Java is still the most popular choice to develop Android apps with many apps actively using it.</p>
                            <p>In this course as well, you will learn end-to-end Android app development with attractive UI and local & server data stores.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
}