import ApifyClient from "apify-client";

const fetchDataFromApify = async () => {
  // Initialize the ApifyClient with API token
  const client = new ApifyClient({
    token: "aEcdP2m65wz6uwLtEqKMeErWP",
  });

  const input = {
    email: "zuzka@apify.com",
  };

  // Run the actor and wait for it to finish
  const run = await client.actor("zuzka/covid-in").call(input);

  // Fetch and print actor results from the run's dataset (if any)

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  const data = items[0];
  return data;
};
export default fetchDataFromApify;
