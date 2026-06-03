package com.helpdesk.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(
                        new Date(System.currentTimeMillis() + jwtExpiration)
                )
                .signWith(
                        io.jsonwebtoken.security.Keys.hmacShaKeyFor(
                                secretKey.getBytes()
                        )
                )
                .compact();
    }
    public String extractUsername(String token) {

        Claims claims = Jwts.parser()
                .verifyWith(
                        io.jsonwebtoken.security.Keys.hmacShaKeyFor(
                                secretKey.getBytes()
                        )
                )
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getSubject();
    }

    public boolean isTokenValid(String token, String email) {

        String username = extractUsername(token);

        return username.equals(email);
    }
}