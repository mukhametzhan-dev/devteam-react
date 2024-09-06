def decrypt(path, key):
    L = 40
    with open(path, 'rb') as file:
        cipher = file.read()
    n = int.from_bytes(cipher[10:14], byteorder="little")
    
    header = cipher[:n]
    cipher_pixel = [cipher[i: i + 3] for i in range(n, len(cipher), 3)]
    len_pixel = len(cipher_pixel)
    
    cipher_table = [[cipher_pixel[i + j] for j in range(0, len_pixel, L)] for i in range(L)]
    
    # Create the inverse of the key to reverse the permutation
    inverse_key = [0] * L
    for i, k in enumerate(key):
        inverse_key[k] = i
        
    # Reconstruct the original pixel data using the inverse key
    text_table = [cipher_table[inverse_key[i]] for i in range(L)]
    original_pixels = b''.join([b''.join([text_table[i][j] for i in range(L)]) for j in range(len(text_table[0]))])
    
    # Combine header and pixel data
    original_image = header + original_pixels
    
    with open('decrypted_flag.bmp', 'wb') as file:
        file.write(original_image)

def main():
    # Key must be known or provided (same key used in encryption)
    key = [26, 37, 6, 21, 31, 32, 28, 17, 13, 15, 12, 0, 4, 27, 2, 7, 9, 30, 1, 8, 25, 34, 11, 38, 36, 35, 29, 18, 14, 33, 19, 5, 39, 24, 23, 20, 10, 3, 16, 22]  # Replace with the original key used in encryption
    decrypt('cipher.bmp', key)

if __name__ == "__main__":
    main()
