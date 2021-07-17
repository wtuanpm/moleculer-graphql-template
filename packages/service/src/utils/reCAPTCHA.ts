import axios from 'axios';
import env from '@/env';
import { makeGraphqlError } from '@gobysend/goby-definition/dist/service';
import { ErrorCodes } from '@graphql/types/generated-graphql-types';

export const verifyReCAPTCHAToken = async (token: string) => {
  try {
    const response = await axios.post<{ success: boolean }>(`https://www.google.com/recaptcha/api/siteverify?secret=${env.reCAPTCHASecretKey}&token=${token}`);
    if (!response.data.success) {
      throw makeGraphqlError('CAPTCHAR is invalid', ErrorCodes.CaptchaInvalid);
    }
  } catch (error) {
    throw makeGraphqlError(error.message, ErrorCodes.CaptchaInvalid);
  }
};
