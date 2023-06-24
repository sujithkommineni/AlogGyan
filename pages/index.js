import Link from 'next/link'
import Prog from '../public/images/programming_1_green.svg';
import Courses from '../components/courses';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section id="header" className="d-flex align-items-center">
        <div>
          <div className="row">
            <div className="col-md-6 pt-5 pg-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <div className="my-auto">
                <h1>Welcome to <strong className="brand-name">AlgoGyan</strong></h1>
                <h2 className="my-3">Best place to start your Android developer journey</h2>
                <div className="mt-3">
                  <Link href="/contact" className="btn-get-started">Get Started</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <Image src={Prog} className="img-fluid animated" alt="programming" />
            </div>
          </div>
        </div>
      </section>
      <Courses />
    </Layout>
  )
}
