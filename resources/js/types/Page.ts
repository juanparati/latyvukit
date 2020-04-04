import User from '@js/types/User';

export default interface Page {
    auth: {
        user: User | null;
    };
    flash: {
        message: string | null;
    };
    errors: any | null;
}
