import { DateTime } from 'luxon';

export const GetMyClanTag = () => `#${process.env.COC_CLAN_TAG}`;

export const GetFirestorePath = (collectionKey: String, documentKey: String) => {
  const url = `/projects/${process.env.FIREBASE_PROJECT_ID}/databases/(default)/documents/${collectionKey}/${documentKey}?key=${process.env.FIREBASE_WEB_API_KEY}`;
  console.log('FIRESTORE_URL_PATH:', url);
  return url;
};

export const ToYearMonth = (date: DateTime) => {
  return date.toFormat('yyyy-LL');
};
