'use client';
import { useState, useEffect } from 'react';
import SavedPalette from '../../../components/savedPalette';
import { IGetUserPalette } from '../../../models/getUserPalette.interface';

async function getPalettes(): Promise<IGetUserPalette[]> {
  const response = await fetch('api/getUserPalettes');
  if (!response.ok) {
    throw new Error('Failed to fetch palettes');
  }
  const data = await response.json();

  const palettes = data.map(x => {
    return {
      ...x,
      palleteJson: JSON.parse(x.palleteJson),
    };
  });

  return palettes;
}

export default function SavedPalettes() {
  const [palettes, setPalettes] = useState<IGetUserPalette[]>([]);

  useEffect(() => {
    const fetchPalettes = async () => {
      try {
        const fetchedPalettes = await getPalettes();
        setPalettes(fetchedPalettes);
      } catch (error) {
        console.error('Error fetching palettes:', error);
      }
    };
    fetchPalettes();
  }, []);

  return (
    <section id="saved">
      <h2>Saved Palettes</h2>
      <div className="saved-palettes">
        {palettes.length === 0 ? (
          <p>No palettes found</p>
        ) : (
          palettes.map(palette => (
            <SavedPalette key={palette.id} palette={palette} />
          ))
        )}
      </div>
    </section>
  );
}
