const prisma = require('../utils/prisma');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('@hapi/jwt');

const register = async (payload) => {
    const { email, password, schoolname, schooltype } = payload;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error('Email sudah terdaftar');

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
        data: { email, password: hashed, namaSekolah: schoolname, tingkat: schooltype, role: 'sekolah' },
    });

    return { id: user.id, email: user.email, jenis_sekolah: user.tingkat };
};

const login = async ({ email, password }) => {
    const user = await prisma.user.findUnique({ where: { email } });
    const match = await comparePassword(password, user.password);
    if (!match) throw new Error('Email atau Password salah');

    const token = jwt.token.generate(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        {
            key: process.env.JWT_SECRET,
            algorithm: 'HS256',
        }
    );

    return { token };
};

const logout = async () => {
    return { status: 'success' };
};

module.exports = { register, login, logout };
