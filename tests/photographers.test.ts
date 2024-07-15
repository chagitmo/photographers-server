import request from 'supertest';
import app from '../src/server';

describe('GET /api/photographers', () => {
  it('should return 5 photographers on page 1', async () => {
    const res = await request(app).get('/api/photographers?page=1&pageSize=5');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(5);
  });

  it('should return 0 photographers on page 7', async () => {
    const res = await request(app).get('/api/photographers?page=7&pageSize=5');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
  });
});

describe('GET /api/photographers/:id', () => {
  it('should return a photographer with status 200', async () => {
    const res = await request(app).get('/api/photographers/4349');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  it('should return 404 for not found photographer', async () => {
    const res = await request(app).get('/api/photographers/2');
    expect(res.status).toBe(404);
    expect(res.body).toBe('Photographer not found');
  });
});
