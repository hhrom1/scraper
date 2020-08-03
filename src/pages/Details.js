import getHash from '../utils/getHash';
import getData from '../utils/getData';


const Character = async () => {
    const id = getHash();
    const jobs = await getData(id);
    const view = `
    <div class="card-deck mt-5 mb-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">Job </h5>
          <p class="card-text text-center"> ${ id} </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">Total products </h5>
          <p class="card-text text-center"> ${ jobs[0].message[0].count } </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center"> Total Items  </h5>
          <p class="card-text text-center"> ${ jobs[0].message[0].sum} </p>
        </div>
      </div>
    </div>
    <div class="mb-1 >
      <a href="https://storage.scrapinghub.com/items/466199/1/${id}?apikey=0ce8426c37874847853c2ea0ae4e269f&format=json&saveas=items_search_xiaomi_8.json">
        <button type="button" class="btn btn-light">Download Data</button>
      </a>
    </div>
    <table class="table table-striped table-light">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Rank</th>
            <th scope="col">Product</th>
            <th scope="col">Items</th>
            </tr>
        </thead>
        <tbody>
          ${jobs[0].details.map((job,idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${job.productos}</td>
                  <td>${job.count}</td>
                </tr>`
            ).join('') }
        </tbody>
    </table>
    `;
    return view;
};

export default Character;