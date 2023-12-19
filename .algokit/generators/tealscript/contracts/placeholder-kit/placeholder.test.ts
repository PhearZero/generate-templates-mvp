import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { PlaceHolderClient } from './client/PlaceHolderClient';

const fixture = algorandFixture();

let appClient: PlaceHolderClient;

describe('PlaceHolder', () => {
    beforeEach(fixture.beforeEach);

    beforeAll(async () => {
        await fixture.beforeEach();
        const { algod, testAccount } = fixture.context;

        appClient = new PlaceHolderClient(
            {
                sender: testAccount,
                resolveBy: 'id',
                id: 0,
            },
            algod
        );

        await appClient.create.createApplication({});
    });

    test('sum', async () => {
        const a = 13;
        const b = 37;
        const sum = await appClient.doMath({ a, b, operation: 'sum' });
        expect(sum.return?.valueOf()).toBe(BigInt(a + b));
    });

    test('difference', async () => {
        const a = 13;
        const b = 37;
        const diff = await appClient.doMath({ a, b, operation: 'difference' });
        expect(diff.return?.valueOf()).toBe(BigInt(a >= b ? a - b : b - a));
    });
});
