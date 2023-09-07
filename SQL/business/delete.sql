CREATE PROCEDURE `business_delete`(
	IN iId INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE vCount INT;
        
    CALL validateSession(iToken, iUser, @respuesta);
    
	SELECT @respuesta INTO vValid from dual;
    
    IF vValid = 1 THEN
		SELECT count(*) 
        INTO vCount
        FROM business b 
        INNER JOIN socialnetworks sn ON sn.Business_idBusiness = b.idBusiness
        INNER JOIN users u ON u.Business_idBusiness = b.idBusiness
        WHERE b.idBusiness = iId;
        
        IF vCount = 0 THEN
			DELETE FROM business WHERE idBusiness = iId;
            SET oRes = 1;
			SET oMessage = 'Deleted successfully';
		ELSE
			SET oRes = 0;
			SET oMessage = 'One or more records associated with another entity';
        END IF;
        
        
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END