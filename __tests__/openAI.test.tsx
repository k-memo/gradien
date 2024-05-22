/**
 * @jest-environment node
 */
import { POST } from '@/app/api/generatePalette/route';
import { NextRequest, NextResponse } from 'next/server';

// Mock the NextResponse.json function
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, options) => {
      return { data, options }; // Return the mocked response
    }),
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
      text: () => {
        return JSON.stringify({
          skinColor: '#ffc896',
          eyeColor: '#6496ff',
          hairColor: '#c86432',
        });
      },
    };

    const response: any = await POST(req);

    expect(response.options.status).toBe(200);
    expect(response.data.colors.length).toEqual(10);
  }, 30000); // 30 wait atleast 30 seconds
});
