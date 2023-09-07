CREATE PROCEDURE `postsimages_by_post_delete`(
	IN iIdPost INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE vCount INT;
	-- Validar sesión
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    -- Si es valida.
    IF vValid = 1 THEN
		UPDATE postsimages
		SET
		`status` = 'I',
		`updatedAt` = NOW()
		WHERE `idPost` = iIdPost;
		SET oRes = 1;
		SET oMessage = 'Deleted successfully';
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message; -- retornamos respuesta
END