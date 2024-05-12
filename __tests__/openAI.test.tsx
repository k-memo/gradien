/**
 * @jest-environment node
 */
import { POST } from '@/app/api/generatePalette/route';
import { NextRequest, NextResponse } from 'next/server';

// Mock the NextResponse.json function
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('POST /api/generatePalette', () => {
  it('should return color palette', async () => {
    const req = {
      method: 'POST',
      body: JSON.stringify({
        skinColor: '#ffc896',
        eyeColor: '#6496ff',
        hairColor: '#c86432',
      }),
    };

    const requestObj = new NextRequest(
      new URL('/api/generatePalette', 'http://localhost'),
      {
        body: req.body,
      },
    );

    const response = await POST(requestObj);

    expect(response.status).toBe(200);
    expect(response).toEqual(expect.any(String));
  });
});
