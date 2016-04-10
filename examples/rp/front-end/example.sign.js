/**
 * Commented example for a authentication call prepared by a relying party (RP).
 */
window.u2f.sign([{
    // Version of the protocol that the to-be-registered U2F token must
    // speak. For the version of the protocol described herein, must be
    // "U2F_V2".
    version : "U2F_V2",

    // The websafe-base64-encoded challenge.
    // This happens to be text but any binary data is fine...
    challenge : btoa("bogus"),

    // The application id that the RP would like to assert. The new key
    // pair that the U2F device generates will be associated with this
    // application id.
    app_id : "http://127.0.0.1",

    // A session id created by the RP. The RP can opaquely store things
    // like expiration times for the registration session, protocol
    // version used, private key material that certain protocol
    // versions require, etc.
    // The response from the API will include the sessionId. This
    // allows the RP to fire off multiple registration requests, and
    // associate the response with the correct request. (Note: this
    // might be more accurately called "relying_party_state", but for
    // compatibility with existing implementations within Chrome we
    // keep the legacy name.)
    sessionId : "42",

    // The key handle. This is provided by the relying party, and was obtained
    // by the relying party during registration.
    // This happens to be text but any binary data is fine...
    keyHandle: btoa("dummy_key_handle")
}], function (data) {
    // registration is complete
    console.log(JSON.stringify(data));
}, 20); // use 20s timeout