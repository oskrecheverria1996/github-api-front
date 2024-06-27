/* tslint:disable */
/* eslint-disable */

/**
 * Sigstore Bundle v0.1
 */
export interface SigstoreBundle0 {
  dsseEnvelope?: {
'payload'?: string;
'payloadType'?: string;
'signatures'?: Array<{
'sig'?: string;
'keyid'?: string;
}>;
};
  mediaType?: string;
  verificationMaterial?: {
'x509CertificateChain'?: {
'certificates'?: Array<{
'rawBytes'?: string;
}>;
};
'tlogEntries'?: Array<{
'logIndex'?: string;
'logId'?: {
'keyId'?: string;
};
'kindVersion'?: {
'kind'?: string;
'version'?: string;
};
'integratedTime'?: string;
'inclusionPromise'?: {
'signedEntryTimestamp'?: string;
};
'inclusionProof'?: string | null;
'canonicalizedBody'?: string;
}>;
'timestampVerificationData'?: string | null;
};
}
