import Layout from '../components/Layout';
import {portafolio} from '../lib/menu'
import Portafolio from '../components/Portafolio'

const index = () => {
  return (
    <Layout title={'La Patrona'} >
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center text-light'>Portafolio</h1>
                        </div>  
                        {
                            portafolio.map(({title, img, description},i)=>(
                                <div key={i} className="col-md-4 p-2 ">
                                    <div className="card h-100">
                                        <Portafolio
                                            title={title}
                                            img={img}
                                            description={description}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default index