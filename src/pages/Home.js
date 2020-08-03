import getData from '../utils/getData';
import dateFromat from '../utils/dateFormat';

const Home = async() => {
    const jobs = await getData();
    var total = 0;
    jobs.forEach(function (job) {
        total += 1;
    });
    const view = `
    <div class="card mt-5 mb-5">
        <div class="card-body">
          <h3 class="card-text text-center">  
           Completed Jobs
          <span class="badge badge-primary badge-pill">${total}</span> 
          </h3>
        </div>
    </div>
    <table class="table table-striped table-light">
        <thead class="thead-dark">
            <tr>
            <th scope="col"># Job</th>
            <th scope="col">Name</th>
            <th scope="col">Strat job</th>
            </tr>
        </thead>
        <tbody>
            ${jobs.map(job => `
            <tr>
                <th scope="row"> <a href="#/${job.key.split("/")[2]}/"> ${job.key.split("/")[2]} </a> </th>
                <td><a href="#/${job.key.split("/")[2]}/"> ${job.spider} </a></td>
                <td><a href="#/${job.key.split("/")[2]}/"> ${ dateFromat(job.running_time)} </a></td>
            </tr>
            `
            ).join('')}
        </tbody>
    </table>
    `;
    return view;

};

export default Home;