function encode(value: any) : object {
  if (value === null) {
    return {
      nullValue: null,
    };
  }
  if (typeof value === "boolean") {
    return {
      booleanValue: value,
    };
  }
  if (typeof value === "number" && Number.isInteger(value)) {
    return {
      integerValue: String(value),
    };
  }
  if (typeof value === "number") {
    return {
      doubleValue: value,
    };
  }
  if (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z$/.test(value)
  ) {
    return {
      timestampValue: value,
    };
  }
  if (
    typeof value === "string" &&
    /^projects\/.*\/databases\/.*\/documents\/.+/.test(value)
  ) {
    return {
      referenceValue: value,
    };
  }
  // There's no way to tell whether a seemingly base64-encoded string
  // is intended to be stored as a stringValue or a bytesValue.
  if (typeof value === "string") {
    return {
      stringValue: value,
    };
  }
  if (
    typeof value === "object" &&
    "latitude" in value &&
    "longitude" in value
  ) {
    return {
      geoPointValue: {
        latitude: value.latitude,
        longitude: value.longitude,
      },
    };
  }
  if (typeof value === "object" && Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map((item) => encode(item)),
      },
    };
  }
  if (typeof value === "object") {
    return {
      mapValue: {
        fields: Serialize(value),
      },
    };
  }
  return {
    nullValue: null,
  };
}

export const Serialize = (object: object) : object => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      return [key, encode(value)];
    })
  );
};

function decode(value: any) : any {
  if ("nullValue" in value) {
    return null;
  }
  if ("booleanValue" in value) {
    return value.booleanValue;
  }
  if ("integerValue" in value) {
    return parseInt(value.integerValue);
  }
  if ("doubleValue" in value) {
    return value.doubleValue;
  }
  if ("timestampValue" in value) {
    return value.timestampValue;
  }
  if ("stringValue" in value) {
    return value.stringValue;
  }
  if ("bytesValue" in value) {
    return value.bytesValue;
  }
  if ("referenceValue" in value) {
    return value.referenceValue;
  }
  if ("geoPointValue" in value) {
    const { latitude, longitude } = value.geoPointValue;
    return { latitude, longitude };
  }
  if ("arrayValue" in value) {
    if ("values" in value.arrayValue) {
      return value.arrayValue.values.map((val: any) => decode(val));
    } else {
      return [];
    }
  }
  if ("mapValue" in value) {
    if ("fields" in value.mapValue) {
      return Deserialize(value.mapValue.fields);
    } else {
      return {};
    }
  }
  return null;
}

export const Deserialize = (fields: object) : object => {
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => {
      return [key, decode(value)];
    })
  );
};
