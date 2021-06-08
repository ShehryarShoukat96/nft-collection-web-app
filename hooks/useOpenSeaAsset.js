import useSWR from 'swr';

export default function useOpenSeaAsset(address) {
  const openSeaUrl = (adr) => `https://api.opensea.io/api/v1/assets?owner=${adr}&order_direction=desc&offset=0&limit=10000`;

  const fetcher = (url) => fetch(url).then((r) => r.json());

  return useSWR(openSeaUrl(address), fetcher, {
    refreshInterval: 60 * 1000,
  });
}
