// utils/firebaseAuthErrors.ts

export function isFirebaseAuthError(error: unknown): boolean {
    if (typeof error === 'object' && error !== null) {
      const errorCode = (error as { code?: string }).code;
      return typeof errorCode === 'string' && errorCode.startsWith('auth/');
    }
    return false;
}