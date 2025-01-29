import express from 'express';
import { getCredentials, getCredentialByUserId, createCredential, deleteCredential } from '../controllers/credentialController.js';

const router = express.Router();

router.get('/', getCredentials);
router.get('/:user_id', getCredentialByUserId);
router.post('/', createCredential);
router.delete('/:user_id', deleteCredential);

export default router;
